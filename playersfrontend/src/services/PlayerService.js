import axios from "axios";
const PLAYER_API_bASE_URL ="http://localhost:8080/api/v1/players";
class PlayerService {

    getPlayers(){
        return axios.get(PLAYER_API_bASE_URL);
    }
    createPlayer(player){
        return axios.post(PLAYER_API_bASE_URL,player);

    }
    getPlayerById(playerId){
        return axios.get(PLAYER_API_bASE_URL + "/" + playerId);
    }
    updatePlayer(player, playerId){
        return axios.put(PLAYER_API_bASE_URL + "/" + playerId, player);
    }
    deletePlayer(playerId){
        return axios.delete(PLAYER_API_bASE_URL + "/" + playerId);
    }

}
export default new PlayerService();