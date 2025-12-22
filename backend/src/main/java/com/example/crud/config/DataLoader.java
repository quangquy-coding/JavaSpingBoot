package com.example.crud.config;

import com.example.crud.model.User;
import com.example.crud.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        if (userRepository.count() == 0) {
            userRepository.save(new User("Nguyễn Văn An", "an.nguyen@email.com", "0901234567", "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"));
            userRepository.save(new User("Trần Thị Bình", "binh.tran@email.com", "0912345678", "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150"));
            userRepository.save(new User("Lê Văn Cường", "cuong.le@email.com", "0923456789", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"));
            userRepository.save(new User("Phạm Thị Dung", "dung.pham@email.com", "0934567890", "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"));
            userRepository.save(new User("Hoàng Văn Em", "em.hoang@email.com", "0945678901", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"));
            
            System.out.println("Đã thêm 5 users mẫu vào database!");
        }
    }
}