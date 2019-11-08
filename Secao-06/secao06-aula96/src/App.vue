<template>
    <div>
        <appHeader/>
        <contadorInf/>
        <contador/> 
    </div>
</template>

<script>
import AppHeader from './components/shared/AppHeader'
import Contador from './components/contador/Contador'
import ContadorInf from './components/contador/ContadorInf'

export default {
    components: {
        AppHeader,
        Contador,
        ContadorInf,
    }    
}
</script>