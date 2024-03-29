package com.example.aquarium_be.controller;

import com.example.aquarium_be.dto.CartDto;
import com.example.aquarium_be.dto.IAccompanyingImage;
import com.example.aquarium_be.dto.IOrderProductDto;
import com.example.aquarium_be.dto.OrderProductDto;
import com.example.aquarium_be.model.*;
import com.example.aquarium_be.service.*;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

@RestController
@RequestMapping("api/public")
@CrossOrigin("*")
public class AquaProductController {
    @Autowired
    private IAquaProductService iAquaProductService;
    @Autowired
    private IAquaTypeService iAquaTypeService;
    @Autowired
    private ICartService iCartService;
    @Autowired
    private IAccountService iAccountService;
    @Autowired
    private IOrderProductService iOrderProductService;
    @Autowired
    private IOrderDetailService iOrderDetailService;


    @GetMapping("/listFish")
    public ResponseEntity<List<AquaProduct>> getListFish(@RequestParam("page") int page
                                                           , @RequestParam("size") int size) {
        Pageable pageable = PageRequest.of(page, size);
        List<AquaProduct> listFish = iAquaProductService.getListFish(pageable);
        if (listFish.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(listFish, HttpStatus.OK);
    }

    @GetMapping("/listAquatic")
    public ResponseEntity<List<AquaProduct>> getListAquatic(@RequestParam("page1") int page1
            , @RequestParam("size1") int size1) {
        Pageable pageable = PageRequest.of(page1, size1);
        List<AquaProduct> listAquatic = iAquaProductService.getListAquatic(pageable);
        if (listAquatic.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(listAquatic, HttpStatus.OK);
    }

    @GetMapping("/listFood")
    public ResponseEntity<List<AquaProduct>> getListFood(@RequestParam("page2") int page2
            , @RequestParam("size2") int size2) {
        Pageable pageable = PageRequest.of(page2, size2);
        List<AquaProduct> listFood = iAquaProductService.getListFood(pageable);
        if (listFood.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(listFood, HttpStatus.OK);
    }

    @GetMapping("findProductById/{id}")
    public ResponseEntity<AquaProduct> detailTicket(@PathVariable("id") int id) {
        AquaProduct aquaProduct = iAquaProductService.findProductDetailById(id);
        if (aquaProduct == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(aquaProduct, HttpStatus.OK);
        }
    }

    @GetMapping("/accompanyingImageListById/{id}")
    public ResponseEntity<List<IAccompanyingImage>> getAccompanyingImageList(@PathVariable("id") int id) {
        List<IAccompanyingImage> accompanyingImageList = iAquaProductService.accompanyingImageList(id);
        if (accompanyingImageList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(accompanyingImageList, HttpStatus.OK);
    }

    @GetMapping("/getListSearchResults")
    public ResponseEntity<List<AquaProduct>> getListSearchResults(
            @RequestParam("page") int page,
            @RequestParam("size") int size,
            @RequestParam("keyword") String keyword) {
        Pageable pageable = PageRequest.of(page, size);
        List<AquaProduct> listSearchResults = iAquaProductService.getListSearchResults(keyword,pageable);
        return new ResponseEntity<>(listSearchResults, HttpStatus.OK);
    }

    @GetMapping("listAquaType")
    public ResponseEntity<List<AquaType>> aquaTypeList() {
        List<AquaType> aquaType = iAquaTypeService.findAquaType();
        if (aquaType == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(aquaType, HttpStatus.OK);
        }
    }

    @GetMapping("/changeListForOptionList")
    public ResponseEntity<List<AquaProduct>> getListSearchResultsByOption(
            @RequestParam("page") int page,
            @RequestParam("size") int size,
            @RequestParam("keyword") String keyword,
            @RequestParam("id") int id) {
        Pageable pageable = PageRequest.of(page, size);
        List<AquaProduct> listSearchResults = iAquaProductService.getListSearchResultsOption(keyword,id,pageable);
        return new ResponseEntity<>(listSearchResults, HttpStatus.OK);
    }

    @PostMapping("/cart/create")
    public ResponseEntity<?> createOrUpdate(@RequestBody CartDto cartDto) {
        Cart cart = new Cart();
        Accounts accounts = iAccountService.findById(cartDto.getAccounts());
        System.out.println(accounts);
        AquaProduct aquaProduct = iAquaProductService.findAquaProduct(cartDto.getAquaProduct());
        BeanUtils.copyProperties(cartDto, cart);
        cart.setAccounts(accounts);
        cart.setAquaProduct(aquaProduct);
        if (iCartService.checkCart(cart.getAquaProduct(),cart.getAccounts(),cart.getSize())) {
            Cart cart1 = iCartService.findByFoodIdAndUserId(cart.getAquaProduct(),cart.getAccounts(),cart.getSize());
            cart1.setQuantity(cart1.getQuantity() + 1);
            cart1.setSize(cart1.getSize());
            iCartService.createCart(cart1);
        }else {
            Cart cart1 = new Cart();
            cart1.setQuantity(cartDto.getQuantity());
            cart1.setSize(cartDto.getSize());
            cart1.setAquaProduct(iAquaProductService.findAquaProduct(cartDto.getAquaProduct()));
            cart1.setAccounts(iAccountService.findById(cartDto.getAccounts()));
            iCartService.createCart(cart1);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    public String generateOrderCode() {
        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        int codeLength = 8;
        StringBuilder code = new StringBuilder();

        Random random = new Random();
        for (int i = 0; i < codeLength; i++) {
            int index = random.nextInt(characters.length());
            char randomChar = characters.charAt(index);
            code.append(randomChar);
        }

        return code.toString();
    }


    @PostMapping("/cart/buy")
    public ResponseEntity<?> buy(@RequestBody OrderProductDto orderProductDto) {
        List<Cart> list = iCartService.findAllByUser(iAccountService.findById(orderProductDto.getAccounts()));
        List<AquaProduct> aquaProducts = iAquaProductService.findAll();

        OrderProduct bill = new OrderProduct();
        bill.setDateOrder(orderProductDto.getDateOrder());
        bill.setTotal(orderProductDto.getTotal());
        bill.setAccounts(iAccountService.findById(orderProductDto.getAccounts()));
        String orderCode = generateOrderCode();
        bill.setCode(orderCode);
        iOrderProductService.addBill(bill);
        for (int i = 0; i < list.size(); i++) {
            OrderDetail billHistory = new OrderDetail();
            billHistory.setOrderProduct(bill);
            billHistory.setAmount(list.get(i).getQuantity());
            billHistory.setAquaProduct(list.get(i).getAquaProduct());
            billHistory.setSize(list.get(i).getSize());
            for (int j = 0; j < aquaProducts.size(); j++) {
                if (aquaProducts.get(j).getId().equals(list.get(i).getAquaProduct().getId())) {
                    if (list.get(i).getSize().equals("Một ngón")){
                        billHistory.setTotal(aquaProducts.get(j).getPrice()*list.get(i).getQuantity());
                    }
                    if (list.get(i).getSize().equals("Hai ngón")){
                        billHistory.setTotal((aquaProducts.get(j).getPrice()+100000)*list.get(i).getQuantity());
                    }
                    if (list.get(i).getSize().equals("Ba ngón")){
                        billHistory.setTotal((aquaProducts.get(j).getPrice()+250000)*list.get(i).getQuantity());
                    }
                    if (list.get(i).getSize().equals("Bốn ngón")){
                        billHistory.setTotal((aquaProducts.get(j).getPrice()+500000)*list.get(i).getQuantity());
                    }
                    if (list.get(i).getSize().equals("Bàn ngón")){
                        billHistory.setTotal((aquaProducts.get(j).getPrice()+800000)*list.get(i).getQuantity());
                    }
                    AquaProduct aquaProduct = new AquaProduct();
                    aquaProduct.setId(aquaProducts.get(j).getId());
                    aquaProduct.setImage(aquaProducts.get(j).getImage());
                    aquaProduct.setName(aquaProducts.get(j).getName());
                    aquaProduct.setPrice(aquaProducts.get(j).getPrice());
                    aquaProduct.setDescription(aquaProducts.get(j).getDescription());
                    aquaProduct.setDateSubmit(aquaProducts.get(j).getDateSubmit());
                    aquaProduct.setAquaType(aquaProducts.get(j).getAquaType());
                    aquaProduct.setQuantity(aquaProducts.get(j).getQuantity() - list.get(i).getQuantity());
                    // Cập nhật aquaProduct vào cơ sở dữ liệu (hoặc danh sách aquaProducts tùy vào nhu cầu của bạn)
                    iAquaProductService.updateAquaProduct(aquaProduct);
                }
            }
            iOrderDetailService.addBillHistory(billHistory);
        }
        iCartService.deleteCartByIdUser(orderProductDto.getAccounts());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/cart/list/{id}")
    public ResponseEntity<List<Cart>> showList(@PathVariable("id") Long id){
        List<Cart> carts = iCartService.findAll(id);
        return new ResponseEntity<>(carts, HttpStatus.OK);
    }

    @PostMapping("/cart/edit")
    public ResponseEntity<?> editSize(@RequestBody CartDto cartDto) {
        Cart cart = new Cart();
        List<Cart> carts = iCartService.findAll(cartDto.getAccounts());
        for (int i = 0; i < carts.size(); i++) {
            if (carts.get(i).getSize().equals(cartDto.getSize())  && carts.get(i).getAquaProduct().getId() == cartDto.getAquaProduct() && carts.get(i).getAccounts().getId()==cartDto.getAccounts()) {

                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        }
        BeanUtils.copyProperties(cartDto, cart);
        iCartService.updateSize(cart.getId(),cart.getSize());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/cart/delete/{id}")
    public ResponseEntity<Cart> deleteCart(@PathVariable("id") Long id) {
        Cart cart = iCartService.findCart(id);
        if (cart == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        iCartService.deleteCart(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/cart/increase")
    public ResponseEntity<?> increaseQuantity(@RequestBody CartDto cartDto) {
        Cart cart = new Cart();
        Accounts accounts = iAccountService.findById(cartDto.getAccounts());
        AquaProduct aquaProduct = iAquaProductService.findAquaProduct(cartDto.getAquaProduct());
        BeanUtils.copyProperties(cartDto, cart);
        cart.setAccounts(accounts);
        cart.setAquaProduct(aquaProduct);
        Cart cart1 = iCartService.findByAquaProductIdAndUserId(cart.getAquaProduct().getId(),cart.getAccounts().getId(),cart.getSize());
        if (cart1 != null) {
            cart1.setQuantity(cart1.getQuantity() + 1);
        } else {
            cart1 = new Cart();
            cart1.setAquaProduct(cart.getAquaProduct());
            cart1.setAccounts(cart.getAccounts());
            cart1.setSize(cart.getSize());
            cart1.setQuantity(cartDto.getQuantity()+1);
        }

        iCartService.createCart(cart1);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/cart/reduce")
    public ResponseEntity<?> reduceQuantity(@RequestBody CartDto cartDto) {
        Cart cart = new Cart();
        Accounts accounts = iAccountService.findById(cartDto.getAccounts());
        AquaProduct aquaProduct = iAquaProductService.findAquaProduct(cartDto.getAquaProduct());
        BeanUtils.copyProperties(cartDto, cart);
        cart.setAccounts(accounts);
        cart.setAquaProduct(aquaProduct);
        Cart cart1 = iCartService.findByAquaProductIdAndUserId(cart.getAquaProduct().getId(),cart.getAccounts().getId(),cart.getSize());
        if (cart1 != null) {
            cart1.setQuantity(cart1.getQuantity() - 1);
        } else {
            cart1 = new Cart();
            cart1.setAquaProduct(cart.getAquaProduct());
            cart1.setAccounts(cart.getAccounts());
            cart1.setSize(cart.getSize());
            cart1.setQuantity(cartDto.getQuantity()-1);
        }

        iCartService.createCart(cart1);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/info/{id}")
    public ResponseEntity<Accounts> info(@PathVariable("id") Long id) {
        Accounts byId = iAccountService.findById(id);
        if (byId == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(byId, HttpStatus.OK);
        }
    }



    @GetMapping("/listOrder")
    public ResponseEntity<Page<IOrderProductDto>> getAllAndSearchDocument(
            @RequestParam(defaultValue = "", required = false) Long id,
            @PageableDefault(value = 4) Pageable pageable) {
        Page<IOrderProductDto> orderProductDto = iOrderProductService.findAllIOrderProductDto(id, pageable);
        if (orderProductDto.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(orderProductDto, HttpStatus.OK);
    }

    @GetMapping("/infoBill/{id}")
    public ResponseEntity<List<OrderDetail>> infoBillList(@PathVariable("id") Long id) {
        List<OrderDetail> byId = iOrderDetailService.findById(id);
        if (byId == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(byId, HttpStatus.OK);
        }
    }


}
