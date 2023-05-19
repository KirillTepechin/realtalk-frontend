import * as VueRouter from 'vue-router'

import LoginPage from "@/pages/LoginPage";
import RegistrationPage from "@/pages/RegistrationPage";
import FeedPage from "@/pages/FeedPage";
import ProfilePage from "@/pages/ProfilePage";
import EditProfilePage from "@/pages/EditProfilePage";
import ChatsPage from "@/pages/ChatsPage";
import SubscriptionsPage from "@/pages/SubscriptionsPage";
import SubscribersPage from "@/pages/SubscribersPage";
import SearchPage from "@/pages/SearchPage";

import RegistrationForm from "@/components/RegistrationForm";
import BirthdateCityForm from "@/components/BirthdateCityForm";
import PhotoForm from "@/components/PhotoForm";
import PersonalDataForm from "@/components/PersonalDataForm";
import LoginDataForm from "@/components/LoginDataForm";


const routes = [
    { path: '/', component: LoginPage, },
    { path: '/auth', component: LoginPage },
    { path: '/registration', component: RegistrationPage, redirect: { path: "/registration/step-1" },
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
    { path: '/:login', component: ProfilePage },
    { path: '/edit-profile', component: EditProfilePage, redirect: { path: "/edit-profile/personal" },
     children: [
        {
            path: 'personal',
            component: PersonalDataForm,
            meta:{reload: true}
        },
        {
            path: 'login-data',
            component: LoginDataForm,
        },
       
    ] },
    { path: '/chats', component: ChatsPage },
    { path: '/subscribers', component: SubscribersPage },
    { path: '/subscriptions', component: SubscriptionsPage },
    { path: '/search', component: SearchPage },
]

export default new VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes 
})