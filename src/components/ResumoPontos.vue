<template>
	<div>
		<v-row>
			<v-col md="12" class="d-flex justify-center">
				<v-subheader>{{titulo}}</v-subheader>
			</v-col>
		</v-row>
		<v-row>
			<v-col md="8">
				<span>Pontos: </span>
			</v-col>
			<v-col md="4">
				<span>{{pontos.qtdPontos | numberBR}}</span>
			</v-col>
		</v-row>
		<v-row>
			<v-col md="8">
				<span>Pontos Bonificados: </span>
			</v-col>
			<v-col md="4">
				<span>{{pontos.qtdPontosBonificados | numberBR}}</span>
			</v-col>
		</v-row>
		<v-row>
			<v-col md="8">
				<span>Total Pontos: </span>
			</v-col>
			<v-col md="4">
				<span>{{pontos.qtdTotalPontos | numberBR}}</span>
			</v-col>
		</v-row>
		<v-row>
			<v-col md="8">
				<span>Pontos em Reais: </span>
			</v-col>
			<v-col md="4">
				<span>{{pontos.totalEmReais | money}}</span>
			</v-col>
		</v-row>
	</div>
</template>

<script lang="ts">
import IPontos from '@/types/IPontos'
import {Component, Prop, Vue} from 'vue-property-decorator'

@Component
class ResumoPontos extends Vue{

	@Prop() readonly pontos!: IPontos
	@Prop(String) readonly titulo!: String

}

export default ResumoPontos

</script>

<style>

</style>