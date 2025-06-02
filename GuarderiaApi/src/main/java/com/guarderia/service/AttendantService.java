package com.guarderia.service;

import com.guarderia.entity.Guardian;
import com.guarderia.repository.AttendantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AttendantService {
    private final AttendantRepository attendantRepository;
    public List<Guardian> findAll() {
        return attendantRepository.findAll();
    }

    public Optional<Guardian> findById(String courseId) {
        return attendantRepository.findById(courseId);
    }

    public Guardian save(Guardian child) {
        return attendantRepository.save(child);
    }

    public void deleteById(String courseId) {
        attendantRepository.deleteById(courseId);
    }

    public boolean existsGuardianById(String courseId) {
        return attendantRepository.existsById(courseId);
    }
}
