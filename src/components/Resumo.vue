<template>
	<div>
		<ResumoPontos titulo="Parceiro" :pontos="pontosParceiro"></ResumoPontos>
		<v-divider class="my-5"></v-divider>
		<ResumoPontos titulo="Cartão" :pontos="pontosCartao"></ResumoPontos>
		<v-divider class="my-5"></v-divider>
		<ResumoTotal :vlrFinalProduto="vlrFinalProduto" :pontos="pontosTotais"></ResumoTotal>
	</div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import ResumoPontos from './ResumoPontos.vue'
import ResumoTotal from './ResumoTotal.vue'
import IPontos from '../types/IPontos'

@Component({
	components: {
		ResumoPontos,
		ResumoTotal		
	}
})
class Resumo extends Vue{

	@Prop(Object) readonly pontosParceiro!: IPontos
	@Prop(Object) readonly pontosCartao!: IPontos
	@Prop(Object) readonly pontosTotais!: IPontos
	@Prop(Number) readonly vlrFinalProduto!: number

}

export default Resumo

</script>
<style>

</style>