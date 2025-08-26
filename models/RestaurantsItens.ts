class RestaurantsItens {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string

  constructor(
    id: number,
    titulo: string,
    tipo: string,
    avaliacao: number,
    descricao: string,
    capa: string,
    destacado?: boolean
  ) {
    this.id = id
    this.titulo = titulo
    this.tipo = tipo
    this.avaliacao = avaliacao
    this.descricao = descricao
    this.capa = capa
    this.destacado = destacado
  }
}

export default RestaurantsItens
