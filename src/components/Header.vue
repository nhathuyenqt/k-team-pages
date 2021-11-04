<template v-slot:img="{ props }">
<v-img
    v-bind="props"
    gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
></v-img>
</template>

<v-app-bar-title>Cybersecurity Group</v-app-bar-title>
<template v-slot:extension>
<v-tabs align-with-title>
    <v-tab>Home</v-tab>
    <v-tab>People</v-tab>
    <v-tab>Research</v-tab>
    <v-tab>Publications</v-tab>
    <v-tab>Courses</v-tab>
    <v-tab>Contact</v-tab>
</v-tabs>
</template>
