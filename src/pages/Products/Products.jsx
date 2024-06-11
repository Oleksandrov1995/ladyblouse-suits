import { ProductCard } from "components/ProductCard/ProductCard"
import { ShoppingList } from '../../components/ShoppingList/ShoppingList';
import { useState } from "react";
import { ShoppingListButton } from "components/ShoppingListButton/ShoppingListButton";
import { Footer } from "components/Footer/Footer";
import { Contacts } from "components/Contacts/Contacts";
export const Products = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleModalOpen = () => { setModalOpen(true) };
    const handleModalClose = () => { setModalOpen(false) };
 
    return (
       <div>
          <ShoppingList modalOpen={modalOpen} modalClose={handleModalClose} />
          <ShoppingListButton modalOpen={handleModalOpen} />
          <ProductCard modalOpen={handleModalOpen}   />
          <Contacts/>
          <Footer/>
       </div>
    );
 };
 