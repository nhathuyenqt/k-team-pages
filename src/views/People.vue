<template>

  <v-row class="d-flex justify-start">
    <v-col v-for="(item) in items" :col="4"  :key="item.title" align='center'>
      <v-list-item-avatar size="128">
        <v-img :src="item.avatar"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title v-html="item.name"></v-list-item-title>
        <v-list-item-subtitle v-html="item.title"></v-list-item-subtitle>
      </v-list-item-content>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    data: () => ({
      items: [
        {
          avatar: 'https://live.staticflickr.com/5647/31013406835_b24ccab596.jpg',
          name: 'Katerina Mitrokotsa',
          title: 'Full Professor of Cyber Security',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://live.staticflickr.com/5647/31013406835_b24ccab596.jpg',
          name: 'Eriane Breu',
          title: 'Administration, Chair of Cyber Security',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://live.staticflickr.com/5647/31013406835_b24ccab596.jpg',
          name: 'Hiraku Morita',
          title: 'Postdoctoral researcher',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://live.staticflickr.com/5647/31013406835_b24ccab596.jpg',
          name: 'Johannes Ernst',
          title: 'Doctoral Researcher',
          subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://live.staticflickr.com/5647/31013406835_b24ccab596.jpg',
          name: 'Adrien Pasquereau',
          title: 'Doctoral Researcher',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
    }),
  }
</script>