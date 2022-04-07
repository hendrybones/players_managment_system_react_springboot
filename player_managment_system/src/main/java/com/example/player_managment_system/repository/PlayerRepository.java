package com.example.player_managment_system.repository;

import com.example.player_managment_system.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long  > {
}
