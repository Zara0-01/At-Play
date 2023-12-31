import React from 'react'
import { Route, Routes } from 'react-router-dom'
import contents from 'routes/contentRoutes'

import { ArrayType } from 'shared/helpers/helpers'
import { ErrorPage } from 'components/pages/children/error'
import HomePage from 'components/home'
import { Layout } from './Layout'

const AppRouter = () => {
    const isAuth = true
    if (!isAuth) return null // Render nothing if the user is not authenticated
    const { publicPages } = contents

    const renderRoutes = (pages: ArrayType, isFirst: boolean = true) => {
        return (
            <Route path="/" element={<Layout isFirst={isFirst}/>} >
                {
                    pages.map(RouteElem => (
                        <React.Fragment key={RouteElem.id}>
                            <Route path={RouteElem.path} element={<RouteElem.element />} />
                            {RouteElem.children && renderRoutes(RouteElem.children, false) }
                            <Route path="*" element={<ErrorPage />} />
                        </React.Fragment>
                    ))
                }
            </Route>
        )
    }

    return (
        <Routes>
            <Route path="/" element={<HomePage />}>
                <Route path="/" element={<></>} />
            </Route>
            {publicPages && renderRoutes(publicPages)}
        </Routes>
    )
}
export default AppRouter