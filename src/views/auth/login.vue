<template>
	<div id="template">
		<section id="login" class="flex flex-col items-center justify-center h-screen">
			<Card style="width: 25rem; margin-bottom: 2em">
				<template #title>
					<div class="flex justify-center">
						Iniciar Sesión
					</div>
				</template>
				<template #content>
					<div class="flex flex-col gap-4">
						<div class="flex flex-col">
							<span>Usuario</span>
							<InputText type="text" v-model="value1" />
						</div>
						<div class="flex flex-col">
							<span>Contraseña</span>
							<InputText type="text" v-model="value1" />
						</div>
						<div class="flex justify-between">
							<Button label="Registrate" class="p-button-help" />
							<Button label="Ingresar" />
						</div>
					</div>
				</template>
			</Card>
		</section>
	</div>
</template>

<script>
	
	export default {
		name: 'login',
		setup() {

		}
	}
</script>

<style scoped>
#template {
	background-image: url("https://i.imgur.com/HgflTDf.jpg");
	min-height: 100vh;
	background-size: cover;
	background-position: center;
	position: relative;
}

#template:before {
	content: "";
	width: 100%;
	min-height: 100vh;
	position: absolute;
	background-color: #2196F3;
	opacity: 0.5;
}

#login {
	position: relative;
}
</style>
