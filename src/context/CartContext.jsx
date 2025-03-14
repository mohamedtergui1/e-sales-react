"use client"

import { createContext, useContext, useReducer } from "react"

const CartContext = createContext()

const initialState = {
    items: [],
    totalItems: 0,
    totalPrice: 0,
}

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM": {
            const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id)

            if (existingItemIndex > -1) {
                const updatedItems = [...state.items]
                updatedItems[existingItemIndex].quantity += 1

                return {
                    ...state,
                    items: updatedItems,
                    totalItems: state.totalItems + 1,
                    totalPrice: state.totalPrice + action.payload.price,
                }
            }

            return {
                ...state,
                items: [...state.items, { ...action.payload, quantity: 1 }],
                totalItems: state.totalItems + 1,
                totalPrice: state.totalPrice + action.payload.price,
            }
        }
        case "REMOVE_ITEM": {
            const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id)

            if (existingItemIndex > -1) {
                const item = state.items[existingItemIndex]

                if (item.quantity === 1) {
                    return {
                        ...state,
                        items: state.items.filter((item) => item.id !== action.payload.id),
                        totalItems: state.totalItems - 1,
                        totalPrice: state.totalPrice - action.payload.price,
                    }
                }

                const updatedItems = [...state.items]
                updatedItems[existingItemIndex].quantity -= 1

                return {
                    ...state,
                    items: updatedItems,
                    totalItems: state.totalItems - 1,
                    totalPrice: state.totalPrice - action.payload.price,
                }
            }

            return state
        }
        case "CLEAR_CART":
            return initialState
        default:
            return state
    }
}

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState)

    const addItem = (item) => {
        dispatch({ type: "ADD_ITEM", payload: item })
    }

    const removeItem = (item) => {
        dispatch({ type: "REMOVE_ITEM", payload: item })
    }

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }

    return (
        <CartContext.Provider
            value={{
                items: state.items,
                totalItems: state.totalItems,
                totalPrice: state.totalPrice,
                addItem,
                removeItem,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider")
    }
    return context
}

