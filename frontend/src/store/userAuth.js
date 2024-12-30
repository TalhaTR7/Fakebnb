import { create } from 'zustand';

export const userAuth = create((set) => ({
    user: null,
    setUser: (user) => set({ user })
}))