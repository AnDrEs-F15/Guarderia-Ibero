package com.guarderia.auth;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtAuthenticatorFilter extends OncePerRequestFilter {
    private final JwtService jwtService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String authorization =request.getHeader("Authorization");
        System.out.println("Filter: " +  authorization );
        if (authorization != null && authorization.startsWith("Bearer") ){
            String jwt = authorization.replace("Bearer", "");
            UsernamePasswordAuthenticationToken user = JwtService.isValidToken(jwt);
            SecurityContextHolder.getContext().setAuthentication(user);
        }
        filterChain.doFilter(request,response);
    }
}
