<template>
  <div>
		<v-row>
				<v-col md="6">
						<v-subheader>Valor do Produto</v-subheader>
						<v-text-field type="number" v-model="infoCalculo.vlrProduto" outlined hide-details></v-text-field>
				</v-col>
				<v-col md="6">
								<v-subheader>Valor do Milheiro (R$)</v-subheader>
								<v-text-field type="number" v-model="infoCalculo.vlrMilheiro" outlined hide-details></v-text-field>
				</v-col>
		</v-row>
		<v-row >
				<v-col md="12" cols="12" class="pb-0 d-flex justify-center">
						<h3>Programa Parceiro</h3>
				</v-col>
				<v-col md="6">
								<v-subheader>Pontos por Real</v-subheader>
								<v-text-field type="number" v-model="infoCalculo.parceiro.pontosPorReal" outlined hide-details></v-text-field>
				</v-col>
				<v-col md="6">
								<v-subheader>Bonificação Resgate (%)</v-subheader>
								<v-text-field type="number" v-model="infoCalculo.parceiro.percentualBonificacao" outlined hide-details></v-text-field>
				</v-col>
		</v-row>
		<v-row >
				<v-col md="12" cols="12" class="pb-0 d-flex justify-center">
						<h3>Cartão Crédito</h3>
				</v-col>
				<v-col md="6">
								<v-subheader>Pontos por Real</v-subheader>
								<v-text-field type="number" v-model="infoCalculo.cartao.pontosPorReal" outlined hide-details></v-text-field>
				</v-col>
				<v-col md="6">
								<v-subheader>Bonificação Resgate (%)</v-subheader>
								<v-text-field type="number" v-model="infoCalculo.cartao.percentualBonificacao" outlined hide-details></v-text-field>
				</v-col>
		</v-row>
		<v-row>
			<v-col md="12" cols="12" class="d-flex justify-center">
				<v-btn @click="onClickCalcular" class="primary">Calcular</v-btn>
			</v-col>
		</v-row>
  </div>
</template>

<script lang="ts">
import {Component, Emit, Vue} from 'vue-property-decorator'
import IInfoCalculo from '../types/IInfoCalculo'

@Component
class Formulario extends Vue{

	infoCalculo: IInfoCalculo = {
		vlrProduto: 0,
		vlrMilheiro: 20,
		parceiro: {
			pontosPorReal: 10,
			percentualBonificacao: 100
		},
		cartao: {
			pontosPorReal: 0.28,
			percentualBonificacao: 100
		},
	}

	@Emit('calcular')
	onClickCalcular(): IInfoCalculo{
		return this.infoCalculo
	}

}

export default Formulario

</script>
<style>

</style>