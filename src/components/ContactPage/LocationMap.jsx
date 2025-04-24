import { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Mail, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Custom Google-style marker icon
const googleMarkerIcon = new L.Icon({
    iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

export default function LocationMap() {
    const [activeLocation, setActiveLocation] = useState(0);
    const mapRef = useRef(null);

    const locations = [
        {
            id: 1,
            name: "Headquarters",
            address: "123 Energy Way, Power City, PC 12345",
            phone: "+1 (555) 123-4567",
            email: "info@vicare-tech.com",
            coordinates: { lat: 40.7128, lng: -74.006 },
        },
        {
            id: 2,
            name: "West Coast Office",
            address: "456 Tech Boulevard, Innovation Valley, CA 94103",
            phone: "+1 (555) 987-6543",
            email: "westcoast@vicare-tech.com",
            coordinates: { lat: 37.7749, lng: -122.4194 },
        },
        {
            id: 3,
            name: "European Office",
            address: "78 Power Street, Energy District, London, UK EC1A 1BB",
            phone: "+44 20 1234 5678",
            email: "europe@vicare-tech.com",
            coordinates: { lat: 51.5074, lng: -0.1278 },
        },
        {
            id: 4,
            name: "Asia Pacific Office",
            address: "9 Energy Tower, Tech Park, Singapore 018956",
            phone: "+65 6123 4567",
            email: "apac@vicare-tech.com",
            coordinates: { lat: 1.3521, lng: 103.8198 },
        },
    ];

    // Update map center when active location changes
    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.setView(
                [
                    locations[activeLocation].coordinates.lat,
                    locations[activeLocation].coordinates.lng,
                ],
                13
            );
        }
    }, [activeLocation, locations]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 lg:grid-cols-3"
        >
            {/* Location Selector */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-1 space-y-4"
            >
                <h3 className="text-xl font-semibold text-white mb-4">
                    Select Location
                </h3>
                <div className="space-y-2">
                    {locations.map((location, index) => (
                        <motion.button
                            key={location.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * index }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setActiveLocation(index)}
                            className={`w-full text-left p-4 rounded-lg transition-colors ${
                                activeLocation === index
                                    ? "bg-gray-800 border border-gray-700"
                                    : "border border-gray-700 hover:bg-gray-800"
                            }`}
                        >
                            <div className="flex justify-between items-center">
                                <div>
                                    <h4 className="font-medium text-white">
                                        {location.name}
                                    </h4>
                                    <p className="text-sm text-gray-300 mt-1">
                                        {location.address}
                                    </p>
                                </div>
                                <ChevronDown
                                    className={`h-5 w-5 text-gray-400 transition-transform ${
                                        activeLocation === index
                                            ? "transform rotate-180"
                                            : ""
                                    }`}
                                />
                            </div>

                            <AnimatePresence>
                                {activeLocation === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="mt-4 pt-4 border-t border-gray-700 space-y-3 overflow-hidden"
                                    >
                                        <div className="flex items-start">
                                            <Phone className="h-4 w-4 text-gray-400 mt-1 mr-2" />
                                            <div>
                                                <p className="text-sm text-gray-300">
                                                    {location.phone}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <Mail className="h-4 w-4 text-gray-400 mt-1 mr-2" />
                                            <div>
                                                <p className="text-sm text-gray-300">
                                                    {location.email}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    ))}
                </div>
            </motion.div>

            {/* Map Display */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="lg:col-span-2"
            >
                <div className="rounded-lg overflow-hidden border border-gray-700 h-[400px] md:h-[500px] relative">
                    <MapContainer
                        center={[
                            locations[activeLocation].coordinates.lat,
                            locations[activeLocation].coordinates.lng,
                        ]}
                        zoom={13}
                        style={{ height: "100%", width: "100%" }}
                        ref={mapRef}
                        className="z-0"
                    >
                        <TileLayer
                            attribution='Map data &copy; <a href="https://www.google.com/maps">Google Maps</a>'
                            url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                            maxZoom={20}
                        />
                        {locations.map((location) => (
                            <Marker
                                key={location.id}
                                position={[
                                    location.coordinates.lat,
                                    location.coordinates.lng,
                                ]}
                                icon={googleMarkerIcon}
                                eventHandlers={{
                                    click: () => {
                                        setActiveLocation(
                                            locations.findIndex(
                                                (loc) => loc.id === location.id
                                            )
                                        );
                                    },
                                }}
                            >
                                <Popup className="google-map-popup">
                                    <div className="p-2 min-w-[200px]">
                                        <h4 className="font-medium">
                                            {location.name}
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            {location.address}
                                        </p>
                                        <p className="text-sm mt-1">
                                            {location.phone}
                                        </p>
                                        <p className="text-sm text-blue-600">
                                            {location.email}
                                        </p>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </motion.div>
        </motion.div>
    );
}
