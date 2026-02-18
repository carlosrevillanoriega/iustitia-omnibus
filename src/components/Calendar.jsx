import { useMemo } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useReveal } from '../utils/useReveal'

export default function Calendar() {
    const [ref, isVisible] = useReveal()

    // Generate demo events for current month
    const demoEvents = useMemo(() => {
        const events = []
        const now = new Date()
        const year = now.getFullYear()
        const month = now.getMonth()

        // Add available slots for the next 30 days (weekdays only)
        for (let i = 1; i <= 30; i++) {
            const date = new Date(year, month, now.getDate() + i)
            const day = date.getDay()

            // Skip weekends
            if (day === 0 || day === 6) continue

            const dateStr = date.toISOString().split('T')[0]

            events.push(
                {
                    title: 'Disponible',
                    start: `${dateStr}T10:00:00`,
                    end: `${dateStr}T12:00:00`,
                    backgroundColor: '#a855f7',
                    borderColor: '#9333ea',
                },
                {
                    title: 'Disponible',
                    start: `${dateStr}T14:00:00`,
                    end: `${dateStr}T17:00:00`,
                    backgroundColor: '#a855f7',
                    borderColor: '#9333ea',
                }
            )
        }

        return events
    }, [])

    const handleEventClick = () => {
        const el = document.getElementById('asesorias')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="agenda" className="py-20">
            <div className="section">
                <div ref={ref} className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <span className="inline-block bg-lavender-100 text-lavender-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                        Disponibilidad
                    </span>
                    <h2 className="section-title">Agenda tu Cita</h2>
                    <p className="section-subtitle">
                        Consulta la disponibilidad y selecciona el horario que mejor se adapte a ti.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-4 sm:p-8 shadow-lg shadow-lavender-200/20 border border-lavender-100">
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek',
                        }}
                        events={demoEvents}
                        eventClick={handleEventClick}
                        locale="es"
                        height="auto"
                        buttonText={{
                            today: 'Hoy',
                            month: 'Mes',
                            week: 'Semana',
                        }}
                        dayMaxEvents={2}
                        eventDisplay="block"
                    />
                    <p className="text-xs text-gray-400 text-center mt-4">
                        📅 Modo demo — Los horarios se actualizarán con disponibilidad real próximamente.
                    </p>
                </div>
            </div>
        </section>
    )
}
