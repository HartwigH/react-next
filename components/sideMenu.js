import { useState} from 'react'
import { useRouter } from 'next/router'
import Modal from './modal'
import MovieCreateForm from './movieCreateForm'
import {createMovie} from '../actions'

// Containment
const SideMenu = (props) => {
    const { categories } = props
    const router = useRouter()
    let modal = null

    const handleCreateMovie = (movie) => {
        createMovie(movie).then((movies) => {
            modal.closeModal()
            router.push('/')
        })
    }

    return (
        
        <div>
            
            <h1 className="my-4">{props.appName}</h1>
            <div className="list-group">
                {categories.map( c => (
                    <a 
                    onClick={() => props.changeCategory(c.name)}
                    href="#" 
                    key={c.id} 
                    className={`list-group-item ${props.activeCategory === c.name ? 'active' : ''}`}>{c.name}</a>
                ))
                }
            </div>
            <Modal ref={ele => modal = ele} hasSubmit={false}> 
                <MovieCreateForm handleFormSubmit={handleCreateMovie}/>
            </Modal>
        </div>
    )
}

export default SideMenu