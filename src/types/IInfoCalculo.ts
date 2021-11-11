import IInfoParceiroCartao from "./IInfoParceiroCartao";

interface IInfoCalculo {
    vlrProduto: number
    vlrMilheiro: number
    parceiro: IInfoParceiroCartao
    cartao: IInfoParceiroCartao
}

export default IInfoCalculo