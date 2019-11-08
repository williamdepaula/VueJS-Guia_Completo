<template>
    <div>
        <appContador/> 
        <appHeader/>
    </div>
</template>

<script>
import AppContador from './AppContador'
import AppHeader from './AppHeader'

export default {
    components: {
        AppContador,
        AppHeader
    }    
}
</script>