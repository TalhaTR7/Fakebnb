import { create } from 'zustand';

export const userAuth = create((set) => ({
    user: null,
    setUser: (user) => set({ user })
}))

export const bookingAuth = create((set) => ({
    booking: null,
    setBooking: (booking) => set({ booking })
}))