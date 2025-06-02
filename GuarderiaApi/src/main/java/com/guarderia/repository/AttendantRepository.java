package com.guarderia.repository;

import com.guarderia.entity.Guardian;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AttendantRepository extends JpaRepository<Guardian,String> {
}
