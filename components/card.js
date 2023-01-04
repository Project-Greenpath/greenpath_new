export default function Card({ id, brand, rent, image, description, created_at, updated_at }) {
    const styles = {
        card: {
            display: 'flex',
            flexDirection: 'column',
            width: '300px',
            height: '400px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
        },
        image: {
            width: '100%',
            height: '50%',
            objectFit: 'cover',
        },
        details: {
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '50%',
        },
        brand: {
            margin: '0',
            fontSize: '24px',
            fontWeight: 'bold',
        },
        description: {
            margin: '8px 0',
            fontSize: '16px',
            lineHeight: '1.5',
            color: '#555',
        },
        info: {
            display: 'flex',
            alignItems: 'center',
            fontSize: '14px',
            color: '#888',
            justifyContent: 'flex-end',
        },
        rent: {
            marginRight: '16px',
            fontWeight: 'bold',
        },
        date: {
            fontSize: '12px',
            color: '#ccc',
        },
    };

    return (
        <div style={styles.card}>
            <img src={image} alt={brand} style={styles.image} />
            <div style={styles.details}>
                <h1 style={styles.brand}>{brand}</h1>
                <p style={styles.description}>{description}</p>
                <div style={styles.info}>
                    <span style={styles.rent}>{rent}</span>
                    <span style={styles.date}>{created_at}</span>
                    <span style={styles.date}>{updated_at}</span>
                </div>
            </div>
        </div>
    )
}