const express=require('express');
const adminController=require('../controllers/adminController');
const cartController=require('../controllers/cartController');
const categoryController=require('../controllers/categoryController');
const cartController=require('../controllers/cartController');
const customerController=require('../controllers/customerController');
const order_itemController=require('../controllers/order_itemController');
const paymentController=require('../controllers/paymentController');
const postController=require('../controllers/postController');
const productController=require('../controllers/productController');
const shipmentController=require('../controllers/shipmentController');
const subAdminController=require('../controllers/subAdminController');
const userController=require('../controllers/userController');
const wishlistController=require('../controllers/wishlistController');
const router=express.Router();


//Create
router.get("/CreateAdmin",adminController.CreateAdmin);
//Read
router.get("/ReadAdmin",adminController.ReadAdmin);
//Update
router.get("/UpdateAdmin/:id",adminController.UpdateAdmin);
//Delete
router.get("/DeleteAdmin/:id",adminController.DeleteAdmin);


//Create
router.get("/CreateCart",cartController.CreateCart);
//Read
router.get("/ReadCart",cartController.ReadCart);
//Update
router.get("/UpdateCart/:id",cartController.UpdateCart);
//Delete
router.get("/DeleteCart/:id",cartController.DeleteCart);

//Create
router.get("/CreateCategory",categoryController.CreateCategory);
//Read
router.get("/ReadCategory",categoryController.ReadCategory);
//Update
router.get("/UpdateCategory/:id",categoryController.UpdateCategory);
//Delete
router.get("/DeleteCategory/:id",categoryController.DeleteCategory);


//Create
router.get("/CreateCustomer",customerController.CreateCustomer);
//Read
router.get("/ReadCustomer",customerController.ReadCustomer);
//Update
router.get("/UpdateCustomer/:id",customerController.UpdateCustomer);
//Delete
router.get("/DeleteCustomer/:id",customerController.DeleteCustomer);

//Create
router.get("/CreateOrder_Item",order_itemController.CreateOrder_Item);
//Read
router.get("/ReadOrder_Item",order_itemController.ReadOrder_Item);
//Update
router.get("/UpdateOrder_Item/:id",order_itemController.UpdateOrder_Item);
//Delete
router.get("/DeleteOrder_Item/:id",order_itemController.DeleteOrder_Item);

//Create
router.get("/CreatePayment",paymentController.CreatePayment);
//Read
router.get("/ReadPayment",paymentController.ReadPayment);
//Update
router.get("/UpdatePayment/:id",paymentController.UpdatePayment);
//Delete
router.get("/DeletePayment/:id",paymentController.DeletePayment);

//Create
router.get("/CreatePost",postController.CreatePost);
//Read
router.get("/ReadPost",postController.ReadPost);
//Update
router.get("/UpdatePost/:id",postController.UpdatePost);
//Delete
router.get("/DeletePost/:id",postController.DeletePost);

//Create
router.get("/CreateProduct",productController.CreateProduct);
//Read
router.get("/ReadProduct",productController.ReadProduct);
//Update
router.get("/UpdateProduct/:id",productController.UpdateProduct);
//Delete
router.get("/DeleteProduct/:id",productController.DeleteProduct);

//Create
router.get("/CreateShipment",shipmentController.CreateShipment);
//Read
router.get("/ReadShipment",shipmentController.ReadShipment);
//Update
router.get("/UpdateShipment/:id",shipmentController.UpdateShipment);
//Delete
router.get("/DeleteShipment/:id",shipmentController.DeleteShipment);

//Create
router.get("/CreateShipment",shipmentController.CreateShipment);
//Read
router.get("/ReadShipment",shipmentController.ReadShipment);
//Update
router.get("/UpdateShipment/:id",shipmentController.UpdateShipment);
//Delete
router.get("/DeleteShipment/:id",shipmentController.DeleteShipment);


//Create
router.get("/CreateSubAdmin",subAdminController.CreateSubAdmin);
//Read
router.get("/ReadSubAdmin",subAdminController.ReadSubAdmin);
//Update
router.get("/UpdateSubAdmin/:id",subAdminController.UpdateSubAdmin);
//Delete
router.get("/DeleteSubAdmin/:id",subAdminController.DeleteSubAdmin);


//Create
router.get("/CreateUser",userController.CreateUser);
//Read
router.get("/ReadUser",userController.ReadUser);
//Update
router.get("/UpdateUser/:id",userController.UpdateUser);
//Delete
router.get("/DeleteUser/:id",userController.DeleteUser);


//Create
router.get("/CreateWishlist",wishlistController.CreateWishlist);
//Read
router.get("/ReadWishlist",wishlistController.ReadWishlist);
//Update
router.get("/UpdateWishlist/:id",wishlistController.UpdateWishlist);
//Delete
router.get("/DeleteWishlist/:id",wishlistController.DeleteWishlist);

module.exports=router;