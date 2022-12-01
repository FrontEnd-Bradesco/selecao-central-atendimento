<template>
    <div class="container-geral">

        <div class="row">
          <div class="col-md-12 text-center ">
            <p class="h1">Selecione um dos perfis para continuar</p>

            <img src="/GSRE-CentralSinistroRE/includes/img/cloud-to-left.svg" class="cloud-to-left">
            <img src="/GSRE-CentralSinistroRE/includes/img/cloud-to-right.svg" class="cloud-to-right">
            <img src="/GSRE-CentralSinistroRE/includes/img/cloud-to-left.svg" class="cloud-to-left-2">
            <img src="/GSRE-CentralSinistroRE/includes/img/cloud-to-right.svg" class="cloud-to-right-2">
          </div>
        </div>
        <div class="row">
        <div class="col-sm-6">
            <div class="card card-1" @click="setSegurado">
                <img src="/GSRE-CentralSinistroRE/includes/img/avatar-segurado-centralBac.svg" class="card-img-top" alt="123">
                <div class="card-body">
                    <h5 class="card-title">Segurado</h5>
                <button type="button" class="btn btn-link" >Prosseguir ></button>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="card card-2" @click="setCorretor">
            <img src="/GSRE-CentralSinistroRE/includes/img/avatar-corretor-centralBac.svg" class="card-img-top" alt="123">
            <div class="card-body">
                <h5 class="card-title">Corretor</h5>
                <button type="button" class="btn btn-link" >Prosseguir ></button>
            </div>
            </div>
        </div>
        </div>
        <template v-if="perfilAcesso">
        <div class="row justify-center">
            <div class="form-group mx-sm-3 mb-2">
                <label for="inputPassword2" class="sr-only">Password</label>
            <the-mask 
              type="text"
              :class="{'form-control':true,  'is-invalid':errorCpfCnpjUsuario.isInvalid}" 
              :mask="['###.###.###-##', '##.###.###/####-##']" 
              name="cpfUsuario" 
              id="cpfUsuario" 
              :masked="false" 
              v-model="cpfUsuario" 
              :placeholder="textPlaceholder"/>
            </div>
            <button type="submit" @click="submitCpf" class="btn btn-primary mb-2" :disabled="cpfUsuario.length === 0">Enviar</button>
        </div>
        <div class="row justify-content-md-center">
            <div class="col-md-6">
                <div v-if="errorCpfCnpjUsuario.isInvalid" class="alert alert-danger" role="alert">
                     {{errorCpfCnpjUsuario.msg}}
                 </div>
            </div>
        </div>
        </template>
    </div>
    
</template>

<script>
import { TheMask } from 'vue-the-mask';
import { validarCNPJ, validarCPF } from '@/utils/validators';

export default {
    components: {
        TheMask
    },    
    data() {
        return {
            cpfUsuario: '',
            perfilAcesso: '',
            textPlaceholder: '',
            urlComunique: '',
            errorCpfCnpjUsuario: {
                isInvalid: false,
                msg: '',
            },
        }
    },
    methods:{
        submitCpf(){
            
            if( validarCNPJ(this.cpfUsuario)|| validarCPF(this.cpfUsuario)){
                window.location = this.urlComunique+ (this.perfilAcesso === "CORRETOR" ?"&cpfCnpjCorretor=":"&cpfCnpjSegurado=") + this.cpfUsuario + "&perfilAcesso=" + this.perfilAcesso;
            }else{
                this.errorCpfCnpjUsuario.isInvalid = true;
                this.errorCpfCnpjUsuario.msg = 'CPF ou CNPJ inválido!';
            }
            
        },
        setCorretor(){
            this.urlComunique = document.getElementsByName('urlComuniqueAvisoCorretor')[0].value;
            this.textPlaceholder = 'CPF ou CNPJ do corretor';
            this.perfilAcesso = "CORRETOR";
        },
        setSegurado(){
            this.urlComunique = document.getElementsByName('urlComuniqueAvisoSegurado')[0].value;
            this.textPlaceholder = 'CPF ou CNPJ do segurado';
            this.perfilAcesso = "SEGURADO";
        }
    },
        
    watch:{
        cpfUsuario() {
            if (this.cpfUsuario.length === 0) {
                this.errorCpfCnpjUsuario.isInvalid = false;
                this.errorCpfCnpjUsuario.msg = '';
            }
        }
    },
    
}
</script>

<style lang="scss" scoped>
@import "@/styles/css/main.scss";
@import "selecaoCorretorSegurado.scss";

</style>