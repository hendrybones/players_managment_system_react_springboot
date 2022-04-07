package com.example.player_managment_system.controller;

import com.example.player_managment_system.exception.ResourceNotFoundException;
import com.example.player_managment_system.model.Player;
import com.example.player_managment_system.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/api/v1/")
public class PlayerController {
    @Autowired
    private PlayerRepository playerRepository;

    //get all players
    @GetMapping("/players")
    public List<Player> getAllPlayers(){
        return playerRepository.findAll();
    }

    //create players
    @PostMapping("/players")
    public Player createPlayer(@RequestBody Player player){
        return playerRepository.save(player);
    }

    //get player byId
    @GetMapping("/players/{id}")
    public ResponseEntity<Player> getPlayerById(@PathVariable Long id){
        Player player=playerRepository.findById(id).orElseThrow();
        return ResponseEntity.ok(player);
    }

    //update player rest api
    @PutMapping("/players/{id}")
    public ResponseEntity<Player> updateEmployee(@PathVariable Long id, @RequestBody Player playerDetails){
        Player employee = playerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));

        employee.setFirstName(playerDetails.getFirstName());
        employee.setLastName(playerDetails.getLastName());
        employee.setEmailId(playerDetails.getEmailId());

        Player updatedPlayer = playerRepository.save(employee);
        return ResponseEntity.ok(playerDetails);
    }
    // delete player by id
    @DeleteMapping("/players/{id}")
    public ResponseEntity<Map<String, Boolean>> deletePlayer(@PathVariable Long id){
        Player player = playerRepository.findById(id).orElseThrow();
        playerRepository.delete(player);
        Map<String, Boolean> response =new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return  ResponseEntity.ok(response);
    }


}
