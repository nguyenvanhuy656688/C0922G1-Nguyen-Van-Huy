package com.example.connect_backend_spring.controller.rest;

import com.example.connect_backend_spring.dto.XeDto;
import com.example.connect_backend_spring.model.DiemDen;
import com.example.connect_backend_spring.model.LoaiXe;
import com.example.connect_backend_spring.model.Xe;
import com.example.connect_backend_spring.service.IDiemDenService;
import com.example.connect_backend_spring.service.ILoaiXeService;
import com.example.connect_backend_spring.service.IXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.BeanUtils;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("")
public class XeRestController {
    @Autowired
    private IXeService iXeService;
    @Autowired
    private ILoaiXeService iLoaiXeService;
    @Autowired
    private IDiemDenService iDiemDenService;


    @GetMapping("/loaiXe")
    private ResponseEntity<List<LoaiXe>> danhSachLoaiXe() {
        List<LoaiXe> xeList = iLoaiXeService.getAll();
        if (xeList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(xeList, HttpStatus.OK);
    }

    @GetMapping("/xe")
    private ResponseEntity<Page<Xe>> danhSachXe(@RequestParam(defaultValue = "")
                                                @PageableDefault(size = 2) Pageable pageable) {
        Page<Xe> xePage = iXeService.showList(pageable);
        return new ResponseEntity<>(xePage, HttpStatus.OK);
    }

    @GetMapping("/diemDen")
    private ResponseEntity<List<DiemDen>> danhSachDiemDen() {
        List<DiemDen> diemDens = iDiemDenService.getAll();
        if (diemDens.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(diemDens, HttpStatus.OK);
    }


    @PostMapping("/xe/them")
    private ResponseEntity<?> them(@RequestBody XeDto xeDto) {
        try {
            Xe xe = new Xe();
            BeanUtils.copyProperties(xeDto, xe);
            iXeService.them(xe);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/xe/{id}")
    private ResponseEntity<Xe> xoa(@PathVariable("id") int id) {
        try {
            iXeService.xoaTheoid(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/xe/{id}")
    public String timId(@PathVariable("id") int id){
        try {
            iLoaiXeService.getAll();
            iDiemDenService.getAll();
            iXeService.timTheoId(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PatchMapping("/xe/{id},xe")
    private ResponseEntity<Xe> sua(@RequestBody XeDto xeDto) {
        try {
            Xe xe = new Xe();
            BeanUtils.copyProperties(xeDto, xe);
            iXeService.sua(xe.getId(),xe);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

}
