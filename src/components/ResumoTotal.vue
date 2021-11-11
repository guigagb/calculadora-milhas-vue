<template>
	<div>
		<v-row>
			<v-col md="12" class="d-flex justify-center">
				<v-subheader>Total</v-subheader>
			</v-col>
		</v-row>
		<v-row>
			<v-col md="8">
				<span>Pontos: </span>
			</v-col>
			<v-col md="4">
				<span>{{pontos.qtdPontos | numberBR }}</span>
			</v-col>
		</v-row>
		<v-row>
			<v-col md="8">
				<span>Pontos em Reais: </span>
			</v-col>
			<v-col md="4">
				<span>{{pontos.totalEmReais | money }}</span>
			</v-col>
		</v-row>
		<v-row>
			<v-col md="8">
				<span>Valor Final do Produto: </span>
			</v-col>
			<v-col md="4">
				<span>{{vlrFinalProduto | money}}</span>
			</v-col>
		</v-row>
	</div>
</template>

<script lang="ts">
import IPontos from '@/types/IPontos'
import {Component, Prop, Vue} from 'vue-property-decorator'

@Component
class ResumoTotal extends Vue{

	@Prop(Number) readonly vlrFinalProduto!: number
	@Prop(Object) readonly pontos!: IPontos

}

export default ResumoTotal

</script>
<style>

</style>