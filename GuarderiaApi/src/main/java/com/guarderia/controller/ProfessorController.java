package com.guarderia.controller;

import com.guarderia.constants.PathsApp;
import com.guarderia.entity.Professor;
import com.guarderia.service.ProfessorService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(PathsApp.URI_PROFESSOR)
@RequiredArgsConstructor
public class ProfessorController {
    private final ProfessorService professorService;
    @GetMapping
    public Page<Professor> getAllProfessor(@PageableDefault Pageable pageable) {
        return professorService.findAll(pageable);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Professor> getProfessorById(@PathVariable String id) {
        return professorService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Professor createProfessor(@RequestBody Professor child) {
        return professorService.save(child);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Professor> updateProfessor(@PathVariable String id, @RequestBody Professor child) {
        if (!professorService.existsProfessorById(id)) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(professorService.save(child));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProfessor(@PathVariable String id) {
        if (!professorService.existsProfessorById(id)) return ResponseEntity.notFound().build();
        professorService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
