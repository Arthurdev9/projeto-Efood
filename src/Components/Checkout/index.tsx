import Button from '../Button'

import * as S from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePuchaseMutation } from '../../services/api'
import { IMaskInput } from 'react-imask'
import {
  closeOrder,
  closePayment,
  openPayment,
  clear
} from '../../store/reducers/cart'

type DeliveryForm = {
  fullname: string
  address: string
  city: string
  postalCode: string
  number: string
  complement: string
}

type PaymentForm = {
  cardName: string
  cardNumber: string
  cardCode: string
  expirationMonth: string
  expirationYear: string
}

const Checkout = () => {
  const dispatch = useDispatch()
  const { isPayment, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess }] = usePuchaseMutation()

  const formikEntrega = useFormik<DeliveryForm>({
    initialValues: {
      fullname: '',
      address: '',
      city: '',
      postalCode: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required('Nome é obrigatório'),
      address: Yup.string().required('Endereço é obrigatório'),
      city: Yup.string().required('Cidade é obrigatória'),
      postalCode: Yup.string()
        .matches(/^\d{5}-\d{3}$/, 'CEP deve ter 8 dígitos numéricos')
        .required('CEP é obrigatório'),
      number: Yup.number()
        .typeError('Número deve ser válido')
        .required('Número é obrigatório'),
      complement: Yup.string()
    }),
    onSubmit: () => {
      dispatch(openPayment())
    }
  })

  const formikPagamento = useFormik<PaymentForm>({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expirationMonth: '',
      expirationYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string().required('Nome no cartão é obrigatório'),
      cardNumber: Yup.string()
        .matches(
          /^\d{4} \d{4} \d{4} \d{4}$/,
          'Número do cartão deve ter 16 dígitos no formato 0000 0000 0000 0000'
        )
        .required('Número do cartão é obrigatório'),
      cardCode: Yup.string()
        .matches(/^\d{3}$/, 'Código deve ter 3 dígitos')
        .required('Código é obrigatório'),
      expirationMonth: Yup.string()
        .matches(/^(0[1-9]|1[0-2])$/, 'Mês inválido')
        .required('Mês é obrigatório'),
      expirationYear: Yup.number()
        .typeError('Ano inválido')
        .min(25, 'Ano mínimo é 25')
        .max(99, 'Ano máximo é 99')
        .required('Ano obrigatório')
    }),
    onSubmit: (values) => {
      const payload = {
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: formikEntrega.values.fullname,
          address: {
            description: formikEntrega.values.address,
            city: formikEntrega.values.city,
            zipCode: formikEntrega.values.postalCode,
            number: Number(formikEntrega.values.number),
            complement: formikEntrega.values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expirationMonth),
              year: 2000 + Number(values.expirationYear) // transforma YY em 20YY
            }
          }
        }
      }
      purchase(payload)
    }
  })

  if (isSuccess && data) {
    return (
      <S.OrderContainer>
        <S.OrderTitle>Pedido realizado - {data.orderId}</S.OrderTitle>
        <S.Success>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
        </S.Success>
        <Button
          onClick={() => {
            dispatch(closeOrder())
            dispatch(closePayment())
            dispatch(clear())
          }}
          type="submit"
          title="Concluir"
        >
          Concluir
        </Button>
      </S.OrderContainer>
    )
  }

  return (
    <S.OrderContainer>
      {isPayment ? (
        <form onSubmit={formikPagamento.handleSubmit}>
          <S.OrderTitle>Pagamento</S.OrderTitle>

          <input
            name="cardName"
            placeholder="Nome no cartão"
            value={formikPagamento.values.cardName}
            onChange={formikPagamento.handleChange}
          />
          {formikPagamento.touched.cardName &&
            formikPagamento.errors.cardName && (
              <p>{formikPagamento.errors.cardName}</p>
            )}

          <IMaskInput
            name="cardNumber"
            placeholder="Número do cartão"
            value={formikPagamento.values.cardNumber}
            onChange={formikPagamento.handleChange}
            mask="0000 0000 0000 0000"
            unmask={true}
          />
          {formikPagamento.touched.cardNumber &&
            formikPagamento.errors.cardNumber && (
              <p>{formikPagamento.errors.cardNumber}</p>
            )}

          <IMaskInput
            name="cardCode"
            placeholder="Código"
            value={formikPagamento.values.cardCode}
            onChange={formikPagamento.handleChange}
            mask="000"
            unmask={true}
          />
          {formikPagamento.touched.cardCode &&
            formikPagamento.errors.cardCode && (
              <p>{formikPagamento.errors.cardCode}</p>
            )}

          <IMaskInput
            name="expirationMonth"
            placeholder="Mês (MM)"
            value={formikPagamento.values.expirationMonth}
            onChange={formikPagamento.handleChange}
            mask="00"
            unmask={true}
          />
          {formikPagamento.touched.expirationMonth &&
            formikPagamento.errors.expirationMonth && (
              <p>{formikPagamento.errors.expirationMonth}</p>
            )}

          <IMaskInput
            name="expirationYear"
            placeholder="Ano (YY)"
            value={formikPagamento.values.expirationYear}
            onChange={formikPagamento.handleChange}
            mask="00"
            unmask={true}
          />
          {formikPagamento.touched.expirationYear &&
            formikPagamento.errors.expirationYear && (
              <p>{formikPagamento.errors.expirationYear}</p>
            )}

          <Button title="Finalizar pagamento" type="submit">
            Finalizar pagamento
          </Button>
          <Button
            title="Voltar"
            type="button"
            onClick={() => dispatch(closePayment())}
          >
            Voltar
          </Button>
        </form>
      ) : (
        <form onSubmit={formikEntrega.handleSubmit}>
          <S.OrderTitle>Entrega</S.OrderTitle>

          <input
            name="fullname"
            placeholder="Nome completo"
            value={formikEntrega.values.fullname}
            onChange={formikEntrega.handleChange}
          />
          {formikEntrega.touched.fullname && formikEntrega.errors.fullname && (
            <p>{formikEntrega.errors.fullname}</p>
          )}

          <input
            name="address"
            placeholder="Endereço"
            value={formikEntrega.values.address}
            onChange={formikEntrega.handleChange}
          />
          {formikEntrega.touched.address && formikEntrega.errors.address && (
            <p>{formikEntrega.errors.address}</p>
          )}

          <input
            name="city"
            placeholder="Cidade"
            value={formikEntrega.values.city}
            onChange={formikEntrega.handleChange}
          />
          {formikEntrega.touched.city && formikEntrega.errors.city && (
            <p>{formikEntrega.errors.city}</p>
          )}

          <S.Row>
            <IMaskInput
              name="postalCode"
              placeholder="CEP"
              value={formikEntrega.values.postalCode}
              onChange={formikEntrega.handleChange}
              mask="00000-000"
              unmask={true}
            />
            <input
              name="number"
              placeholder="Número"
              value={formikEntrega.values.number}
              onChange={formikEntrega.handleChange}
            />
          </S.Row>

          <input
            name="complement"
            placeholder="Complemento"
            value={formikEntrega.values.complement}
            onChange={formikEntrega.handleChange}
          />
          {formikEntrega.touched.complement &&
            formikEntrega.errors.complement && (
              <p>{formikEntrega.errors.complement}</p>
            )}

          <Button title="Continuar com o pagamento" type="submit">
            Continuar com o pagamento
          </Button>
          <Button
            title="Voltar"
            type="button"
            onClick={() => dispatch(closeOrder())}
          >
            Voltar
          </Button>
        </form>
      )}
    </S.OrderContainer>
  )
}

export default Checkout
