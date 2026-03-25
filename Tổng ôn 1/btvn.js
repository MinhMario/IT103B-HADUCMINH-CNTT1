
let songs=JSON.parse(localStorage.getItem("songs"))||[];
let nextId = songs.length > 0 ? Math.max(...songs.map(s => s.id)) + 1 : 1;
function renderSongs(){
    let str="";
    for(let i=0;i<songs.length;i++){
        str+=` <tr>
        <th>${songs[i].id}</th>
                <th>${songs[i].name}</th>
                <th>${songs[i].artist}</th>
                <td>
                    <button class="btn-edit" onclick="updateSongs(${songs[i].id})">
                      ✏️ Sửa
                    </button>
                    <button class="btn-delete" onclick="delSong(${songs[i].id})">
                      🗑️ Xóa
                    </button>
                  </td>
                  </tr>`
    }
    document.getElementById("songTable").innerHTML=str;
}
renderSongs();
document.getElementById("submitBtn").addEventListener("click",(e)=>{
  e.preventDefault();
  if(!isEditing){
  addSongs();
  }else{
    editSong();
  }
})
function addSongs(){
  let name=document.getElementById("title").value;
  let artist=document.getElementById("artist").value;
  let song={
    id:nextId++,
    name:name,
    artist:artist,
  };
  songs.push(song);
  localStorage.setItem("songs",JSON.stringify(songs));
  renderSongs();
  document.getElementById("title").value=""
  document.getElementById("artist").value=""
}
let isEditing=0;
function updateSongs(id){
  let song=songs.find(p=>p.id==id);
  document.getElementById("title").value=song.name
  document.getElementById("artist").value=song.artist
  document.getElementById("submitBtn").value="Sửa bài hát";
  isEditing=id;
}
function editSong(){
  let song=songs.find(p=>p.id==isEditing)
   let name=document.getElementById("title").value;
  let artist=document.getElementById("artist").value;
  if(song){
    song.name=name;
    song.artist=artist;
  }
  localStorage.setItem("songs",JSON.stringify(songs));
  renderSongs();
  document.getElementById("title").value=""
  document.getElementById("artist").value=""
}
function delSong(id){
  for(let i=0;i<songs.length;i++){
    if(songs[i].id==id){
    let confirmed=confirm("Có chắc muốn xoá không");
  if(confirmed){
    songs.splice(i,1);
    break;
  }else{
    return;
  }
    }
  }
  alert(" Xoá thành công ");
  renderSongs();
}
function searchSong(){
  let name=document.getElementById("search").value.toLowerCase();
   let result=songs.filter(p=>p.name.toLowerCase().includes(name));
      document.getElementById("songTable").innerHTML=result.map((p)=>`
       <tr>
        <th>${p.id}</th>
                <th>${p.name}</th>
                <th>${p.artist}</th>
                <td>
                    <button class="btn-edit" onclick="updateSongs(${p.id})">
                      ✏️ Sửa
                    </button>
                    <button class="btn-delete" onclick="delSong(${p.id})">
                      🗑️ Xóa
                    </button>
                  </td>
                  </tr>
      `
      ).join("");
}