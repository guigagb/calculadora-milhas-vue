import IInfoParceiroCartao from "@/types/IInfoParceiroCartao"
import IPontos from "@/types/IPontos"

export const calcularPontos = (vlrProduto: number, vlrMilheiro: number, infoParceiroCartao: IInfoParceiroCartao): IPontos => {
    const qtdPontos = vlrProduto * infoParceiroCartao.pontosPorReal
    const qtdPontosBonificados = qtdPontos * infoParceiroCartao.percentualBonificacao / 100
    const qtdTotalPontos = qtdPontosBonificados + qtdPontos
    const totalEmReais = qtdTotalPontos / 1000 * vlrMilheiro

    return {
        qtdPontos,
        qtdPontosBonificados,
        qtdTotalPontos,
        totalEmReais
    }

}