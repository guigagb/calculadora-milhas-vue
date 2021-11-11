<template>
  <div class="calculadora">
    <v-row>
      <v-col md="6" cols="12" class="px-8">
        <Formulario @calcular="handleCalcular"></Formulario>
      </v-col>
      <v-col md="6" cols="12" class="px-8">
        <Resumo 
          :pontosParceiro="pontosParceiro"
          :pontosCartao="pontosCartao"
          :pontosTotais="pontosTotais"
          :vlrFinalProduto="vlrFinalProduto"
        ></Resumo>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import IInfoCalculo from '@/types/IInfoCalculo'
import IPontos from '@/types/IPontos'
import {Component, Vue} from 'vue-property-decorator'
import Formulario from './Formulario.vue'
import Resumo from './Resumo.vue'
import {calcularPontos} from '../services/calcular.service'

@Component({
  components:{
    Formulario,
    Resumo
  }
})
class Calculadora extends Vue{

  pontosParceiro: IPontos = {
    qtdPontos: 0,
    qtdPontosBonificados: 0,
    qtdTotalPontos: 0, 
    totalEmReais: 0
  }
  pontosCartao: IPontos = {
    qtdPontos: 0,
    qtdPontosBonificados: 0,
    qtdTotalPontos: 0, 
    totalEmReais: 0
  }
  pontosTotais: IPontos = {
    qtdPontos: 0,
    qtdPontosBonificados: 0,
    qtdTotalPontos: 0, 
    totalEmReais: 0
  }

  infoCalculo!: IInfoCalculo

  get vlrFinalProduto(){
    return this.infoCalculo?.vlrProduto - this.pontosTotais.totalEmReais
  }

  handleCalcular(infoCalculo: IInfoCalculo){
    
    this.pontosParceiro = calcularPontos(infoCalculo.vlrProduto, infoCalculo.vlrMilheiro, infoCalculo.parceiro )
    this.pontosCartao = calcularPontos(infoCalculo.vlrProduto, infoCalculo.vlrMilheiro, infoCalculo.cartao )

    const qtdPontos =  this.pontosParceiro.qtdPontos + this.pontosCartao.qtdPontos
    const qtdPontosBonificados = this.pontosParceiro.qtdPontosBonificados + this.pontosCartao.qtdPontosBonificados
    const qtdTotalPontos = qtdPontos + qtdPontosBonificados
    const totalEmReais = qtdTotalPontos / 1000 * infoCalculo.vlrMilheiro 

    this.pontosTotais = {
      qtdPontos,
      qtdPontosBonificados,
      qtdTotalPontos,
      totalEmReais
    }

    this.infoCalculo = infoCalculo

  }

}
export default Calculadora

</script>
<style>
    .calculadora{
        max-width: 1000px;
        margin: auto;
        padding: 80px 20px;
    }
</style>