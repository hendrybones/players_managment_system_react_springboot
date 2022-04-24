package com.example.player_managment_system.service;

import com.example.player_managment_system.model.User;
import com.example.player_managment_system.registration.token.ConfirmationToken;
import com.example.player_managment_system.registration.token.ConfirmationTokenService;
import com.example.player_managment_system.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService {
    private final static String USER_NOT_FOUND_MSG=
            "user with email % not found";
    private  final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final ConfirmationTokenService confirmationTokenService;
    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {
        return userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException(String.format(USER_NOT_FOUND_MSG,email)));
    }
    public String signUpUser(User user){
        boolean userExists =userRepository
                .findByEmail(user.getEmail())
                .isPresent();
        if (userExists){
            throw new IllegalStateException("email already taken");
        }
       String encodedPassword= bCryptPasswordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        userRepository.save(user);

        String token = UUID.randomUUID().toString();
        //send confirmation token
        //create a token and save it
        ConfirmationToken confirmationToken = new ConfirmationToken(
                token,
                LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(15),
                user


        );
        confirmationTokenService.saveConfirmationToken(confirmationToken);
        // send email
        return token;
    }

    public void enableUser(String email) {
    }
}
