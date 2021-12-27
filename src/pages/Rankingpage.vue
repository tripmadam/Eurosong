<template>
    <div>
        <h1>
      Ranking
    </h1>
    <button @click="goToPage('game')">
        Show Game
      </button>
      <button @click="goToPage('home')">
        Show Home
      </button>
          <div class="rankingOverview">
      <table>
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Song</th>
            <th>Artist</th>
            <th>Spotify</th>
            <th>Points</th>
          </tr>
        </thead>
        <tr class="rankrow" background-color = 'gold' v-for="(song,index) in songs" :key="song.id">
          <td>{{index+1}}</td>
          <td>{{song.title}}</td>
          <td>{{song.artist}}</td>
          <td><iframe :src="song.spotify" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"></iframe>
          <td>{{song.points}}</td>
        </tr>
        
      </table>
    </div>
    </div>

</template>

<script>
    export default{
        name: "Rankingpage",
        mounted() {
            this.fetchSongs();
        },
        data() {
            return {
                songs: []
            }
        },
        methods: {
            goToPage(page){
                this.$emit("change-page",page);
            },
            // data methods
            fetchSongs(){
                // Get all songs
                const url = "http://webservies.be/eurosong/Songs";
                fetch(url)
                    .then((response) => {
                        return response.json();
                    })
                    .then((songs) => {
                        
                        this.fetchArtists(songs);
                        
                        
                    })
                                       
            },
            fetchArtists(songs) {
                // Get all artist
                const url = "http://webservies.be/eurosong/Artists";
                fetch(url)
                    .then((response) => {
                        // response is text, so convert to json
                        return response.json();
                    })
                    .then((artists) => {
                        // loop over array songs with forEach method
                        
                        songs.map((song) => {
                            
                            // find the artist in an array
                            const artist = artists.find((artist) => artist.id == song.artist);
                            
                            // replace the id by the artist name
                            song.artist = artist.name;
                            
                            // return the new object
                            return song;
                        });
                        // fecth the points
                        
                        this.fetchPoints(songs)
                        
                        
                    });
            },
            fetchPoints(songs) {
              let counter = 0;
              songs.map((song) => {
                const url ="http://webservies.be/eurosong/Songs/"+song.id+"/points" 
                fetch(url)
                    .then((response) => {
                        
                        return response.json();
                    })
                    .then((points) => {
                      song.points = points
                      counter++;
                      if(counter == songs.length){
                        this.songs = songs;
                      }
                      //sort on the points
                      songs.sort((song1,song2) => (song1.points < song2.points) ? 1 : -1 )
                    })
              })
              
              
            
            },
            
            
        }
    }
</script>
