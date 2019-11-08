<template>
    <div>
        <contador/> 
        <appHeader/>
    </div>
</template>

<script>
import AppHeader from './components/shared/AppHeader'
import Contador from './components/contador/Contador'

export default {
    components: {
        AppHeader,
        Contador,
    }    
}
</script>