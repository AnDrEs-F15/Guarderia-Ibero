package com.guarderia.service;

import com.guarderia.entity.Child;
import com.guarderia.repository.ChildRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChildService {

    @Autowired
    private ChildRepository childRepository;

    public List<Child> findAll() {
        return childRepository.findAll();
    }

    public Optional<Child> findById(String documentId) {
        return childRepository.findById(documentId);
    }

    public Child save(Child child) {
        return childRepository.save(child);
    }

    public void deleteById(String documentId) {
        childRepository.deleteById(documentId);
    }

    public boolean existsChildById(String documentId) {
        return childRepository.existsById(documentId);
    }
}
