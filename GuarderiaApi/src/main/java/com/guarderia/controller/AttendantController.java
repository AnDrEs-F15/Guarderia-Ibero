package com.guarderia.controller;

import com.guarderia.constants.PathsApp;
import com.guarderia.entity.Guardian;
import com.guarderia.service.AttendantService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(PathsApp.URI_ATTENDANT)
@RequiredArgsConstructor
public class AttendantController {
    private final AttendantService attendantService;
    @GetMapping
    public List<Guardian> getAllGuardianren() {
        return attendantService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Guardian> getGuardianById(@PathVariable String id) {
        return attendantService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Guardian createGuardian(@RequestBody Guardian child) {
        return attendantService.save(child);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Guardian> updateGuardian(@PathVariable String id, @RequestBody Guardian child) {
        if (!attendantService.existsGuardianById(id)) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(attendantService.save(child));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGuardian(@PathVariable String id) {
        if (!attendantService.existsGuardianById(id)) return ResponseEntity.notFound().build();
        attendantService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
