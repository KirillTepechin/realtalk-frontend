import * as VueRouter from 'vue-router'

import LoginPage from "@/pages/LoginPage";
import RegistrationPage from "@/pages/RegistrationPage";
import FeedPage from "@/pages/FeedPage";
import ProfilePage from "@/pages/ProfilePage";
import EditProfilePage from "@/pages/EditProfilePage";

import RegistrationForm from "@/components/RegistrationForm";
import BirthdateCityForm from "@/components/BirthdateCityForm";
import PhotoForm from "@/components/PhotoForm";
import PersonalDataForm from "@/components/PersonalDataForm";
import LoginDataForm from "@/components/LoginDataForm";


const routes = [
    { path: '/', component: LoginPage, meta:{reload: true} },
    { path: '/auth', component: LoginPage, meta:{reload: true} },
    { path: '/registration', component: RegistrationPage, redirect: { path: "registration/step-1" },
     children: [
        {
            path: 'step-1',
            component: RegistrationForm
        },
        {
            path: 'step-2',
            component: BirthdateCityForm
        },
        {
            path: 'step-3',
            component: PhotoForm
        },
    ] },
    { path: '/feed', component: FeedPage },
    { path: '/profile', component: ProfilePage }, // Будет заменено на  { path: ':login', component: ProfilePage },
    { path: '/edit-profile', component: EditProfilePage, redirect: { path: "/edit-profile/personal" },
     children: [
        {
            path: 'personal',
            component: PersonalDataForm,
            meta:{reload: true}
        },
        {
            path: 'login-data',
            component: LoginDataForm
        },
       
    ] },

]

export default new VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes 
})