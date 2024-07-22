import Aboutus from '@/components/About/Aboutus';
import BookAppointment from '@/components/About/BookAppointment';
import DoctorsTeam from '@/components/About/DoctorsTeam';
import FAQs from '@/components/About/FAQs';
import WhyChoose from '@/components/About/WhyChoose';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Testimonials from '@/components/Home/Testimonials';
import Newslatter from '@/components/Newslatter';
import Head from 'next/head';
import React from 'react';

const About = () => {
    return (
        <>
            <Head>
                <title>Dental Clinic | About</title>
            </Head>
            <main>
                <Header />
                <Banner title="About Us" />
                <Aboutus />
                <WhyChoose />
                <BookAppointment />
                <Testimonials />
                <DoctorsTeam />
                <FAQs />
                <Newslatter />
                <Footer />
            </main>

        </>
    )
}

export default About
