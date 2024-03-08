import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { InputGroup, Row, TabButton } from './styles'

import boleto from '../../assets/images/barcode 1.png'
import credit from '../../assets/images/credit-card 1.png'
import { useFormik } from 'formik'

const Checkout = () => {
  const [payWidthCard, setPayWidthCard] = useState(false)

  const form = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      nameCard: '',
      cardNumber: '',
      experiesMonth: '',
      experiesYear: '',
      cardCode: '',
      installments: 1
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <form onSubmit={form.handleSubmit} className="container">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullname">Nome Completo</label>
              <input
                id="fullname"
                type="text"
                name="fullname"
                value={form.values.fullname}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
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
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cpfCardOwner">
                      CPF do Titular do cartão
                    </label>
                    <input
                      type="number"
                      id="cpfCardOwner"
                      name="cpfCardOwner"
                      value={form.values.cpfCardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup>
                    <label htmlFor="nameCard">Nome do cartão</label>
                    <input
                      type="number"
                      id="nameCard"
                      name="nameCard"
                      value={form.values.nameCard}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input
                      type="number"
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="experiesMonth">Mês de vencimento</label>
                    <input
                      type="number"
                      id="experiesMonth"
                      name="experiesMonth"
                      value={form.values.experiesMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="experiesYear">Ano de vencimento</label>
                    <input
                      type="number"
                      id="experiesYear"
                      name="experiesYear"
                      value={form.values.experiesYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>
                  <InputGroup maxWidth="48px">
                    <label htmlFor="cardCode">CVV</label>
                    <input
                      type="number"
                      id="cardCode"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
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
