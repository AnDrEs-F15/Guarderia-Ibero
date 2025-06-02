package com.guarderia.controller;

import com.guarderia.constants.PathsApp;
import com.guarderia.entity.Documents;
import com.guarderia.service.DocumentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(PathsApp.URI_DOCUMENT)
@RequiredArgsConstructor
public class DocumentController {
    private final DocumentService documentService;
    @GetMapping
    public List<Documents> getAllDocuments() {
        return documentService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Documents> getDocumentsById(@PathVariable Long id) {
        return documentService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Documents createDocuments(@RequestBody Documents child) {
        return documentService.save(child);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Documents> updateDocuments(@PathVariable Long id, @RequestBody Documents child) {
        if (!documentService.existsDocumentsById(id)) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(documentService.save(child));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDocuments(@PathVariable Long id) {
        if (!documentService.existsDocumentsById(id)) return ResponseEntity.notFound().build();
        documentService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
