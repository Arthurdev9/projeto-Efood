class ProductsItens {
  id: number
  nome: string
  descricao: string
  preco: number
  porcao: string
  foto: string

  constructor(
    id: number,
    nome: string,
    descricao: string,
    preco: number,
    porcao: string,
    foto: string
  ) {
    this.id = id
    this.nome = nome
    this.descricao = descricao
    this.preco = preco
    this.porcao = porcao
    this.foto = foto
  }
}

export default ProductsItens
