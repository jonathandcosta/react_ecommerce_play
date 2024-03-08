import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { InputGroup, Row, TabButton } from './styles'

import boleto from '../../assets/images/barcode 1.png'
import credit from '../../assets/images/credit-card 1.png'
import { useFormik } from 'formik'

import * as Yup from 'yup'

const Checkout = () => {
  const [payWidthCard, setPayWidthCard] = useState(false)

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      experiesMonth: '',
      experiesYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: Yup.object({
      // DADOS DE COBRANÇA E ENTREGA
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('O campo é obrigatório'),
      cpf: Yup.string()
        .min(14, 'O campo tem que ter 14 caracteres')
        .max(15, 'O campo tem que ter 14 caracteres')
        .required('O campo é obrigatório'),
      deliveryEmail: Yup.string()
        .email('E-mail inválido')
        .required('O campo é obrigatório'),

      // validando os dados de e-mail
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os e-mails são diferentes')
        .required('O campo é obrigatório'),

      // DADOS DE CARTÃO DE CRÉDITO
      cardOwner: Yup.string().when((values, schema) =>
        payWidthCard ? schema.required('O campo é obrigatório') : schema
      ),
      cpfCardOwner: Yup.string().when((values, schema) =>
        payWidthCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWidthCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWidthCard ? schema.required('O campo é obrigatório') : schema
      ),
      experiesMonth: Yup.string().when((values, schema) =>
        payWidthCard ? schema.required('O campo é obrigatório') : schema
      ),
      experiesYear: Yup.string().when((values, schema) =>
        payWidthCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWidthCard ? schema.required('O campo é obrigatório') : schema
      ),
      installments: Yup.string().when((values, schema) =>
        payWidthCard ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  // console.log(form)

  const getErrorMessage = (fieldName: string, message?: string) => {
    const estaAlterado = fieldName in form.touched
    const estaInvalido = fieldName in form.errors

    if (estaAlterado && estaInvalido) return message
    return ''
  }

  return (
    <form onSubmit={form.handleSubmit} className="container">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Nome Completo</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={form.values.fullName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('email', form.errors.email)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input
                id="cpf"
                type="text"
                name="cpf"
                value={form.values.cpf}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cpf', form.errors.cpf)}</small>
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input
                id="deliveryEmail"
                type="email"
                name="email"
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('deliveryEmail', form.errors.deliveryEmail)}
              </small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryEmail">Confirme seu E-mail</label>
              <input
                id="confirmDeliveryEmail"
                type="email"
                name="confirmDeliveryEmail"
                value={form.values.confirmDeliveryEmail}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage(
                  'confirmDeliveryEmail',
                  form.errors.confirmDeliveryEmail
                )}
              </small>
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="Pagamento">
        <>
          <TabButton
            isActive={!payWidthCard}
            onClick={() => setPayWidthCard(false)}
          >
            <img src={boleto} alt="boleto" />
            Boleto Bancário
          </TabButton>
          <TabButton
            isActive={payWidthCard}
            onClick={() => setPayWidthCard(true)}
          >
            <img src={credit} alt="cartão de credito" />
            Cartão de Crédito
          </TabButton>
          <div className="margin-top">
            {payWidthCard ? (
              <>
                <Row marginTop="24px">
                  <InputGroup>
                    <label htmlFor="cardOwner">Nome do Titular do cartão</label>
                    <input
                      type="text"
                      id="cardOwner"
                      name="cardOwner"
                      value={form.values.cardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardOwner', form.errors.cardOwner)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cpfCardOwner">
                      CPF do Titular do cartão
                    </label>
                    <input
                      type="text"
                      id="cpfCardOwner"
                      name="cpfCardOwner"
                      value={form.values.cpfCardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage(
                        'cpfCardOwner',
                        form.errors.cpfCardOwner
                      )}
                    </small>
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup>
                    <label htmlFor="nameCard">Nome do cartão</label>
                    <input
                      type="text"
                      id="cardDisplayName"
                      name="cardDisplayName"
                      value={form.values.cardDisplayName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage(
                        'cardDisplayName',
                        form.errors.cardDisplayName
                      )}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardNumber', form.errors.cardNumber)}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="experiesMonth">Mês de vencimento</label>
                    <input
                      type="text"
                      id="experiesMonth"
                      name="experiesMonth"
                      value={form.values.experiesMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage(
                        'experiesMonth',
                        form.errors.experiesMonth
                      )}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="experiesYear">Ano de vencimento</label>
                    <input
                      type="text"
                      id="experiesYear"
                      name="experiesYear"
                      value={form.values.experiesYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage(
                        'experiesYear',
                        form.errors.experiesYear
                      )}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="48px">
                    <label htmlFor="cardCode">CVV</label>
                    <input
                      type="text"
                      id="cardCode"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardCode', form.errors.cardCode)}
                    </small>
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup maxWidth="150px">
                    <label htmlFor="installments">Parcelamento</label>
                    <select
                      id="installments"
                      name="installments"
                      value={form.values.installments}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    >
                      <option>1x de R$200,00</option>
                      <option>2x de R$200,00</option>
                      <option>3x de R$200,00</option>
                    </select>
                    <small>
                      {getErrorMessage(
                        'installments',
                        form.errors.installments
                      )}
                    </small>
                  </InputGroup>
                </Row>
              </>
            ) : (
              <p>
                Ao optar por essa forma de pagamento, é importante lembrar que a
                confirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pelas instituições financeiras. Portanto, a
                liberação do código de ativação do jogo adquirido ocorrerá
                somente após a aprovação do pagamento do boleto.
              </p>
            )}
          </div>
        </>
      </Card>
      <Button type="button" title="Clieque aqui para finalizar a compra">
        Finalizar compra
      </Button>
    </form>
  )
}
export default Checkout
