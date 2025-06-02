package com.guarderia.service;

import com.guarderia.entity.Documents;
import com.guarderia.repository.DocumentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
@RequiredArgsConstructor
public class DocumentService {
    private final DocumentRepository documentRepository;
    public List<Documents> findAll() {
        return documentRepository.findAll();
    }

    public Optional<Documents> findById(Long courseId) {
        return documentRepository.findById(courseId);
    }

    public Documents save(Documents child) {
        return documentRepository.save(child);
    }

    public void deleteById(Long courseId) {
        documentRepository.deleteById(courseId);
    }

    public boolean existsDocumentsById(Long courseId) {
        return documentRepository.existsById(courseId);
    }
}
