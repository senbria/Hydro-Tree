<template>
    <v-main>
        <v-app-bar
          color="teal-darken-4"
          image="https://picsum.photos/1920/1080?random"
        >
          <template v-slot:image>
            <v-img
              gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
            ></v-img>
          </template>
  
          <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </template>
  
          <v-app-bar-title>Brian</v-app-bar-title>
  
          <v-spacer></v-spacer>
          <v-btn>
            <RouterLink to="/test"></RouterLink> Test
          </v-btn>
  
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
  
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
  
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
       
        
        <v-btn >
            <RouterLink to="./table"></RouterLink>tables
            
        </v-btn> </v-app-bar>
  </v-main>
  </template>
     