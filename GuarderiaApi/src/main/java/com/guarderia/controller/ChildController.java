package com.guarderia.controller;

import com.guarderia.constants.PathsApp;
import com.guarderia.entity.Child;
import com.guarderia.service.ChildService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(PathsApp.URI_CHILD)
public class ChildController {

    @Autowired
    private ChildService childService;

    @GetMapping
    public List<Child> getAllChildren() {
        return childService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Child> getChildById(@PathVariable String id) {
        return childService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Child createChild(@RequestBody Child child) {
        return childService.save(child);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Child> updateChild(@PathVariable String id, @RequestBody Child child) {
        if (!childService.existsChildById(id)) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(childService.save(child));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteChild(@PathVariable String id) {
        if (!childService.existsChildById(id)) return ResponseEntity.notFound().build();
        childService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
