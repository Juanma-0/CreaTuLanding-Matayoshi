// src/config/firebaseService.js
import { addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

export const getProducts = async () => {
    try {
        const prodCollection = collection(db, 'Products');
        const productosSnapshot = await getDocs(prodCollection);
        const productos = productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log('FirebaseService: Productos obtenidos:', productos);
        return productos;
    } catch (error) {
        console.error("FirebaseService: Error al obtener productos:", error);
        throw error;
    }
};

export const getProductById = async id => {
    try {
        const prodDocRef = doc(db, 'Productos', id);
        const productoSnapshot = await getDoc(prodDocRef);
        if (productoSnapshot.exists()) {
            return { id: productoSnapshot.id, ...productoSnapshot.data() };
        } else {
            console.log(`FirebaseService: No se encontró el producto con ID: ${id}`);
            return null;
        }
    } catch (error) {
        console.error("FirebaseService: Error al obtener producto por ID:", error);
        throw error;
    }
};

export const createOrder = async (order) => {
    try {
        const ordersCollection = collection(db, 'orders');
        const docRef = await addDoc(ordersCollection, order);
        console.log('Orden creada con ID: ', docRef.id);
        return docRef.id;
    } catch (error) {
        console.error('Error al crear la orden: ', error);
        throw error;
    }
};

