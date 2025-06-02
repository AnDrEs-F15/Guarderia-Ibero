package com.guarderia.service;

import com.guarderia.entity.Professor;
import com.guarderia.repository.ProfessorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;



import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProfessorService {
    private final ProfessorRepository professorRepository;
    public Page<Professor> findAll(Pageable pageable) {
        return professorRepository.findAll(pageable);
    }

    public Optional<Professor> findById(String documentId) {
        return professorRepository.findById(documentId);
    }

    public Professor save(Professor child) {
        return professorRepository.save(child);
    }

    public void deleteById(String documentId) {
        professorRepository.deleteById(documentId);
    }

    public boolean existsProfessorById(String documentId) {
        return professorRepository.existsById(documentId);
    }
}
